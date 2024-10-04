-- AlterTable
ALTER TABLE "Settings" ADD COLUMN     "smtpEnabled" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "siteTitle" SET DEFAULT 'Dashboard',
ALTER COLUMN "siteDescription" SET DEFAULT 'A simple dashboard. Change this in the settings.',
ALTER COLUMN "smtpHost" DROP NOT NULL,
ALTER COLUMN "smtpPort" DROP NOT NULL,
ALTER COLUMN "smtpUser" DROP NOT NULL,
ALTER COLUMN "smtpPassword" DROP NOT NULL;
