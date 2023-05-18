-- CreateTable
CREATE TABLE "results" (
    "id" INTEGER NOT NULL,
    "segment" TEXT NOT NULL,
    "jan" DOUBLE PRECISION,
    "feb" DOUBLE PRECISION,
    "mar" DOUBLE PRECISION,
    "apr" DOUBLE PRECISION,
    "may" DOUBLE PRECISION,
    "jun" DOUBLE PRECISION,
    "jul" DOUBLE PRECISION,
    "aug" DOUBLE PRECISION,
    "sep" DOUBLE PRECISION,
    "oct" DOUBLE PRECISION,
    "nov" DOUBLE PRECISION,
    "dec" DOUBLE PRECISION,
    "segment_total" DOUBLE PRECISION,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "targets" (
    "id" INTEGER NOT NULL,
    "segment" TEXT NOT NULL,
    "jan" DOUBLE PRECISION,
    "feb" DOUBLE PRECISION,
    "mar" DOUBLE PRECISION,
    "apr" DOUBLE PRECISION,
    "may" DOUBLE PRECISION,
    "jun" DOUBLE PRECISION,
    "jul" DOUBLE PRECISION,
    "aug" DOUBLE PRECISION,
    "sep" DOUBLE PRECISION,
    "oct" DOUBLE PRECISION,
    "nov" DOUBLE PRECISION,
    "dec" DOUBLE PRECISION,
    "segment_total" DOUBLE PRECISION,

    CONSTRAINT "targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "month_forecast" (
    "id" INTEGER NOT NULL,
    "segment" TEXT NOT NULL,
    "current" DOUBLE PRECISION,
    "forecast" DOUBLE PRECISION,

    CONSTRAINT "month_forecast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pipeline" (
    "id" INTEGER NOT NULL,
    "segment" TEXT NOT NULL,
    "week_id" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "prospecting" DOUBLE PRECISION,
    "qualification" DOUBLE PRECISION,
    "needs_analysis" DOUBLE PRECISION,
    "meeting_demo" DOUBLE PRECISION,
    "negotiation_review" DOUBLE PRECISION,
    "proposal_price_quote" DOUBLE PRECISION,
    "pipeline_total" DOUBLE PRECISION,
    "closed_won" DOUBLE PRECISION,
    "closed_lost" DOUBLE PRECISION,

    CONSTRAINT "Pipeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Week" (
    "id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Week_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "results_id_key" ON "results"("id");

-- CreateIndex
CREATE UNIQUE INDEX "targets_id_key" ON "targets"("id");

-- CreateIndex
CREATE UNIQUE INDEX "month_forecast_id_key" ON "month_forecast"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pipeline_id_key" ON "Pipeline"("id");

-- CreateIndex
CREATE INDEX "week_id" ON "Pipeline"("week_id");

-- CreateIndex
CREATE UNIQUE INDEX "Week_id_key" ON "Week"("id");

-- AddForeignKey
ALTER TABLE "Pipeline" ADD CONSTRAINT "Pipeline_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "Week"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
