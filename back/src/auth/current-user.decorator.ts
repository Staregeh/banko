import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => {
      const ctx = GqlExecutionContext.create(context);
      const request = ctx.getContext();
      const user = request.req.user;
  
      if (!user) {
        return null
      }
  
      return user
    },
)
