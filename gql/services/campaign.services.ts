import { Types } from "mongoose";
import {
  AddCampaignInput,
  CampaignByIdInput,
  CampaignModel,
  UpdateCampaignInput,
} from "../schemas/campaign.schema";

class CampaignService {
  create(input: AddCampaignInput) {
    return CampaignModel.create(input);
  }

  findAll() {
    return CampaignModel.find().lean();
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
