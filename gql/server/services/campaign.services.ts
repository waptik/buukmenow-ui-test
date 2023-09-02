import { Types } from "mongoose";
import { IPaginateOptions } from "typegoose-cursor-pagination";
import {
  AddCampaignInput,
  CampaignModel,
  CampaignsArgs,
  UpdateCampaignInput,
} from "../schemas/campaign.schema";
import { SortDirection } from "../sort.enum";

class CampaignService {
  create(input: AddCampaignInput) {
    return CampaignModel.create(input);
  }

  findAll() {
    return CampaignModel.find().lean();
  }

  async findCampaigns(input: CampaignsArgs) {
    const { orderBy, sortBy, search, ...data } = input as CampaignsArgs & {
      limit: number;
    };

    data.limit = data.limit > 0 ? (input.limit as number) : 10;

    const options: IPaginateOptions = {
      ...data,
      sortField: sortBy,
      sortAscending: orderBy === SortDirection.ASC,
    };
    const res = await CampaignModel.findPaged(
      options,
      search
        ? {
            title: {
              $regex: new RegExp(search.trim(), "i"),
            },
          }
        : undefined
    );

    console.log("findCampaigns", res);
    const { docs, ...rest } = res as typeof res & {
      hasNext: boolean;
      hasPrevious: boolean;
    };

    const result = {
      results: docs,
      pagination: {
        next: rest.hasNext ? rest.next : null,
        previous: rest.hasPrevious ? rest.previous : null,
        total: docs.length,
        pages: data.limit > 0 ? Math.ceil(rest.totalDocs / data.limit) || 1 : 1,
      },
    };

    console.log(
      "findCampaigns.raw.limit",
      Math.ceil(rest.totalDocs / data.limit)
    );
    console.log("findCampaigns.result", result);
    return result;
  }

  async findSingleCampaignById(id: Types.ObjectId) {
    const campaign = await CampaignModel.findById(id);

    if (!campaign) {
      throw new Error("Campaign not found");
    }

    return campaign;
  }

  async findAndUpdate(input: Types.ObjectId, data: UpdateCampaignInput) {
    const campaign = await CampaignModel.findOneAndUpdate(input, data, {
      new: true,
    });

    if (!campaign) {
      throw new Error("Invalid campaign id");
    }

    return campaign;
  }
}

export default CampaignService;
