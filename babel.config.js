module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@service": "./src/service",
            "@utils": "./src/utils",
            "@navigation": "./src/navigation",
          },
        },
      ],
    ],
  };
};
