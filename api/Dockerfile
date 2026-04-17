FROM public.ecr.aws/docker/library/node:20-slim@sha256:f93745c153377ee2fbbdd6e24efcd03cd2e86d6ab1d8aa9916a3790c40313a55
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1@sha256:46d6625e68cbbdd2efab4a20245977664513f13ffef47915b000d431adcea0b4 /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]