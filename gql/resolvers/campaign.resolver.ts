import { Types } from "mongoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ObjectIdScalar } from "../scalars/objectid";
import {
  AddCampaignInput,
  Campaign, UpdateCampaignInput
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
    return this.campaignService.findAndUpdate(id, data);
  }

  @Query(() => [Campaign])
  async campaigns() {
    return this.campaignService.findAll();
  }

  @Query(() => Campaign || null)
  async campaign(
    @Arg("id", () => ObjectIdScalar)
    id: Types.ObjectId
  ) {
    try {
      const campaign = await this.campaignService.findSingleCampaignById(id);
      return campaign;
    } catch (e) {
      console.error(e);

      return null;
    }
  }
}
