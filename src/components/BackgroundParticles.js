import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'


class BackgroundParticles extends Component {
  render () {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [1, 1],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ffffff"],
      cross: "bround",
      random: 5,
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }
    return (

        <ParticlesBg type="custom" config={config} bg={true} />
    )
  }
}

export default BackgroundParticles;
