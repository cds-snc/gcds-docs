FROM public.ecr.aws/docker/library/node:20-slim@sha256:363a50faa3a561618775c1bab18dae9b4d0910a28f249bf8b72c0251c83791ff
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.1@sha256:97c8f81e19e64841df0882d3b3c943db964c554992c1bac26100f1d6c41ea0bb /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 8080

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
COPY src ${FUNCTION_DIR}

RUN npm install --omit=dev

CMD ["node", "index.js"]