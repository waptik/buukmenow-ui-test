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
    const { status, ...rest } = input;
    return CampaignModel.create({
      ...rest,
      active: status === "active" ? true : false,
    });
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

    return result;
  }

  async findSingleCampaignById(id: Types.ObjectId) {
    const campaign = await CampaignModel.findById(id);

    if (!campaign) {
      throw new Error("Campaign not found");
    }

    return campaign;
  }

  async findAndUpdate(id: Types.ObjectId, data: UpdateCampaignInput) {
    const { status, ...rest } = data;
    const campaign = await CampaignModel.findOneAndUpdate(
      id,
      {
        ...rest,
        active: status ? (status === "active" ? true : false) : false,
      },
      {
        new: true,
      }
    );

    if (!campaign) {
      throw new Error("Invalid campaign id");
    }

    return campaign;
  }
}

export default CampaignService;
