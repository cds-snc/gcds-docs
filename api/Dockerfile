FROM public.ecr.aws/docker/library/node:20-slim@sha256:c0f6fd9ba02e2138460fb5a38711b0942d5db2c530870458db10a4529e8b568c
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1@sha256:46d6625e68cbbdd2efab4a20245977664513f13ffef47915b000d431adcea0b4 /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]