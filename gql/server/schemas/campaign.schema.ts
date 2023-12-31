import { getModelForClass, plugin, prop } from "@typegoose/typegoose";
import { ObjectType, Field, InputType, ArgsType, Int } from "type-graphql";
import { Types } from "mongoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import paginationPlugin, { PaginateModel } from "typegoose-cursor-pagination";
import { SortDirection } from "../sort.enum";

export interface CampaignType extends Base {
  _id: Types.ObjectId;
  title: string;
  description: string;
  group: string;
  active: boolean;
  updatedAt?: string;
  createdAt?: string;
}

@ArgsType()
export class CampaignsArgs {
  @Field(() => String, { nullable: true, description: "What to search for" })
  search?: string;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  limit?: number;

  @Field(() => String, { nullable: true })
  next?: string;

  @Field(() => String, { nullable: true })
  previous?: string;

  @Field(() => String, { nullable: true, defaultValue: "createdAt" })
  sortBy?: string;

  @Field(() => SortDirection, {
    nullable: true,
    defaultValue: SortDirection.ASC,
  })
  orderBy?: SortDirection;
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
  status: string;
}

@InputType()
export class UpdateCampaignInput  {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  group?: string;

  @Field({ nullable: true })
  status?: string;
}

@ObjectType()
@plugin(paginationPlugin)
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

@ObjectType({ description: "Pagination schema" })
export class Pagination {
  @Field(() => Boolean)
  hasPrevious: boolean;

  @Field(() => Boolean)
  hasNext: boolean;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pages: number;

  @Field(() => String, { nullable: true })
  next?: string;

  @Field(() => String, { nullable: true })
  previous?: string;
}

@ObjectType({ description: "Paginated campaigns schema" })
export class PaginatedCampaigns {
  @Field(() => Pagination)
  pagination: Pagination;

  @Field(() => [Campaign])
  results: Campaign[];
}

export const CampaignModel = getModelForClass<typeof Campaign>(Campaign, {
  schemaOptions: { timestamps: true },
}) as unknown as PaginateModel<Campaign, typeof Campaign>;
