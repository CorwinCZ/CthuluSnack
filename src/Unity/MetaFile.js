const ANIMATION_TYPES = [
  { name: 'walking', length: 8, start: 4 },
  { name: 'jumping', length: 7, start: 105 },
  { name: 'dancing', length: 4, start: 113 },
  { name: 'shot', length: 14, start: 13 },
  { name: 'blade', length: 16, start: 27 },
  { name: 'axe', length: 14, start: 61 },
  //   {name: 'crush', length: 16},
  //   {name: 'airPump', length: 9},
  //   {name: 'laser', length: 20},
  //   {name: 'electrocuted', length: 9},
  { name: 'acid', length: 20, start: 76 },
  //   {name: 'fire', length: 8},
];

export const loadMetaFile = async url => {
  const response = await fetch(url);
  const data = await response.text();
  const fileHeader = data.split('\n').slice(0, 3);
  const fileBody = data
    .split('\n')
    .slice(3)
    .join('\n');

  return jsyaml.safeLoad(fileBody, {
    schema: jsyaml.FAILSAFE_SCHEMA,
  });
};

export const getSpriteData = async url => {
  const meta = await loadMetaFile(url);
};

export const loadAnimations = async id => {
  const spriteUrl = `assets/Characters/${id}/${`${id}`.padStart(3, '0')}.png`;
  const meta = await loadMetaFile(`${spriteUrl}.meta`);
  const spritesheet = meta.TextureImporter.spriteSheet.sprites;
  const mappedSpritesheet = spritesheet.reduce(
    (state, current) => ({ ...state, [current.name]: current }),
    {},
  );
  const spriteTexture = PIXI.Texture.fromImage(spriteUrl);
  const result = {};
  await Promise.all(
    ANIMATION_TYPES.map(async type => {
      const frames = [];
      for (let i = 0; i < type.length; i++) {
        frames.push({
          x: ((i + type.start) % 11) * 96,
          y: Math.floor((i + type.start) / 11) * 96,
        });
      }
      const textures = frames.map(frame => {
        const cut = new PIXI.Rectangle(frame.x, frame.y, 96, 96);
        return new PIXI.Texture(spriteTexture, cut);
      });
      result[type.name] = new PIXI.extras.AnimatedSprite(textures, true);
    }),
  );

  return result;
};
