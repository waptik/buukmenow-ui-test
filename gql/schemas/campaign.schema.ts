import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectType, Field, InputType } from "type-graphql";
import { Types } from "mongoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export interface CampaignType extends Base {
  _id: Types.ObjectId;
  title: string;
  description: string;
  group: string;
  active: boolean;
  updatedAt?: string;
  createdAt?: string;
}

@InputType()
export class CampaignByIdInput {
  @Field()
  _id: Types.ObjectId;
}

@InputType()
export class AddCampaignInput implements Partial<CampaignType> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  group: string;

  @Field()
  active: boolean;
}

@InputType()
export class UpdateCampaignInput implements Partial<CampaignType> {
  
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  group?: string;

  @Field({ nullable: true })
  active?: boolean;
}

@ObjectType()
export class Campaign extends TimeStamps {
  @Field(() => Types.ObjectId)
  readonly _id: Types.ObjectId;

  @Field(() => String)
  @prop({ required: true })
  title: string;

  @Field(() => String)
  @prop({ required: true })
  description: string;

  @prop({ required: true })
  @Field(() => String)
  group: string;

  @prop({ required: true })
  @Field(() => Boolean, { defaultValue: false })
  active: boolean;

  @prop()
  @Field()
  public updatedAt?: Date;

  @prop()
  @Field()
  public createdAt?: Date;
}

export const CampaignModel = getModelForClass<typeof Campaign>(Campaign, {
  schemaOptions: { timestamps: true },
});
