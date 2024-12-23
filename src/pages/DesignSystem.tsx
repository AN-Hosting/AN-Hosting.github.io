import { Alerts } from '@/components/design/Alerts';
import { Buttons } from '@/components/design/Buttons';
import { Cards } from '@/components/design/Cards';
import { CodeBlocks } from '@/components/design/CodeBlocks';
import { ColorPalettes } from '@/components/design/ColorPalettes';
import { GradientCards } from '@/components/design/GradientCards';
import { GridLayouts } from '@/components/design/GridLayouts';
import { Stats } from '@/components/design/Stats';
import { Tags } from '@/components/design/Tags';
import { Typography } from '@/components/design/Typography';
import { Layout } from '@/components/layout/Layout';

export const DesignSystem = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-12">
        <Typography />
        <ColorPalettes />
        <GradientCards />
        <Buttons />
        <Cards />
        <Alerts />
        <Tags />
        <CodeBlocks />
        <GridLayouts />
        <Stats />
      </div>
    </Layout>
  );
};
