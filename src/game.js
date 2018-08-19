console.log('Game is working!');

class Game {
  constructor() {
    this.state = {
      keys: {},
      clicks: {},
      mouse: {},
      objects: [],
    };

    this.animate = this.animate.bind(this);
  }

  get stage() {
    if (!this._stage) {
      this._stage = this.newStage();
    }

    return this._stage;
  }

  set stage(stage) {
    this._stage = stage;
  }

  newStage() {
    return new PIXI.Container();
  }

  get renderer() {
    if (!this._renderer) {
      this._renderer = this.newRenderer();
    }

    return this._renderer;
  }

  set renderer(renderer) {
    this._renderer = renderer;
  }

  newRenderer() {
    return new PIXI.autoDetectRenderer(
      window.innerWidth,
      window.innerHeight,
      this.newRendererOptions(),
    );
  }

  newRendererOptions() {
    return {
      antialias: true,
      autoResize: true,
      transparent: true,
      roundPixels: true,
      resolution: 2,
    };
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.state.renderer = this.renderer;
    this.state.stage = this.stage;

    this.state.objects.forEach(object => {
      object.animate(this.state);
    });

    this.renderer.render(this.stage);
  }

  addEventListenerTo(element) {
    element.addEventListener('keydown', event => {
      this.state.keys[event.keyCode] = true;
    });

    element.addEventListener('keyup', event => {
      this.state.keys[event.keyCode] = false;
    });

    element.addEventListener('mousedown', event => {
      this.state.clicks[event.which] = {
        clientX: event.clientX,
        clientY: event.clientY,
      };
    });

    element.addEventListener('mouseup', event => {
      this.state.clicks[event.which] = false;
    });

    element.addEventListener('mousemove', event => {
      this.state.mouse.clientX = event.clientX;
      this.state.mouse.clientY = event.clientY;
    });
  }

  addRendererTo(element) {
    element.appendChild(this.renderer.view);
  }

  addObject(object) {
    this.state.objects.push(object);
    this.stage.addChild(object.sprite);
  }
}

const gameInstance = new Game();
export { gameInstance };
