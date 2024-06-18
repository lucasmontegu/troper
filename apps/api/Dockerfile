FROM oven/bun

WORKDIR /app

# Copy project
COPY . .

# To keep the image small ;)
RUN rm -rf /app/apps/admin

#  Temp solution for bun
RUN bun install --ignore-scripts

EXPOSE 3000

WORKDIR /app/apps/api

CMD ["bun", "start"]