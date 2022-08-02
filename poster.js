AFRAME.registerComponent("comics-posters",{
    init: function () {
        this.postersContainer = this.el;
        this.createCards();
    },
    createCards: function () {
        const thumbNailsRef = [
          {
            id: "Super-man",
            title: "Super Man",
            url: "./assets/posters/superman-poster.jpg",
          },
          {
            id: "Spider-man",
            title: "Spider Man",
            url: "./assets/posters/spiderman-poster.jpg",
          },
    
          {
            id: "Captain-aero",
            title: "Captain Aero",
            url: "./assets/posters/captain-aero-poster.jpg",
          },
          {
            id: "Outer-space",
            title: "Outer Space",
            url: "./assets/posters/outer-space-poster.jpg",
          },
        ];
        
        let prevoiusXPosition = -70;
    
        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 30;
          const posY = 10;
          const posZ = -20;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          // Border Element
          const borderEl = this.createBorder(position, item.id);
    
          // Thumbnail Element
          const thumbNail = this.createPoster(item);
          borderEl.appendChild(thumbNail);
    
          // Title Text Element
          const titleEl = this.createTitleEl(position, item);
          borderEl.appendChild(titleEl);
    
          this.postersContainer.appendChild(borderEl);
        }
    },
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 25,
          height : 30
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "white",
          opacity: 1,
        });
        
        entityEl.setAttribute("cursor-listener", {});

        return entityEl;
    },
    createPoster: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height : 22
        });
        entityEl.setAttribute("position", { x: 0, y: 2.5, z: 0.1 });

        entityEl.setAttribute("material", { src: item.url });

        return entityEl
    },
    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
        const elPosition = position;
        elPosition.z = 1;
        elPosition.y = 18;
        elPosition.x = 0
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
      },
})