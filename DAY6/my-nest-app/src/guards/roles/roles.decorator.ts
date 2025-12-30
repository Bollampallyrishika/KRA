/* eslint-disable prettier/prettier */
import { SetMetadata } from "@nestjs/common";
//!roles like user,admin different types of roles
//?decorators are bulit in nest js provides
export const ROLES_KEY ='rotes';
export const Roles=(...roles: string[]) => SetMetadata(ROLES_KEY,roles);
