import { Types } from "mongoose";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { ObjectIdScalar } from "../scalars/objectid";
import {
  AddCampaignInput,
  Campaign,
  CampaignsArgs,
  PaginatedCampaigns,
  UpdateCampaignInput,
} from "../schemas";
import { CampaignService } from "../services";

@Resolver()
export default class CampaignResolver {
  constructor(private campaignService: CampaignService) {
    this.campaignService = new CampaignService();
  }

  @Mutation(() => Campaign)
  async addCampaign(
    @Arg("input", () => AddCampaignInput)
    input: AddCampaignInput
  ) {
    return this.campaignService.create(input);
  }

  @Mutation(() => Campaign)
  async updateCampaign(
    @Arg("id", () => ObjectIdScalar)
    id: Types.ObjectId,
    @Arg("data", () => UpdateCampaignInput)
    data: UpdateCampaignInput
  ) {
    if (!id) {
      throw new Error("An id is required to update a campaign");
    }
    return this.campaignService.findAndUpdate(id, data);
  }

  @Query(() => PaginatedCampaigns, {
    description: "Get all campaigns with pagination",
  })
  async campaigns(@Args() input: CampaignsArgs) {
    return this.campaignService.findCampaigns(input);
  }

  @Query(() => Campaign || null)
  async campaign(
    @Arg("id", () => ObjectIdScalar)
    id: Types.ObjectId
  ) {
    if (!id) {
      throw new Error("An id is required to find a campaign");
    }

    try {
      const campaign = await this.campaignService.findSingleCampaignById(id);
      return campaign;
    } catch (e) {
      const error = e as Error;
      console.error(error);

      return error.message;
    }
  }
}
