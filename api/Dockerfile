FROM public.ecr.aws/docker/library/node:20-slim@sha256:5da391c4b0398f37074b6370dd9e32cebd322c2a227053ca4ae2e7a257f0be21
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.0@sha256:1c31bf4102ca63ef2082534d7139c0bc5fbd36ea6648e4756e9b475ef3ed829c /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]