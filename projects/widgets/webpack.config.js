const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'widgets',

  exposes: {
    ChartComponent: './projects/widgets/src/app/chart/chart.component.ts',
    KpiComponent: './projects/widgets/src/app/kpi/kpi.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
