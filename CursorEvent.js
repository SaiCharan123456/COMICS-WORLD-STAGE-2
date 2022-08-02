AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePostersListState: function () {
      const id = this.el.getAttribute("id");
      const postersId = ["Super-man", "Spider-man", "Captain-aero", "Outer-space"];
      if (postersId.includes(id)) {
        const postersContainer = document.querySelector("#posters-container");        
        postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        
        this.el.setAttribute("material", {
          color: "blue",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePostersListState();
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {        
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");          
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "white",
              opacity: 1,
            });
          }
        }
      });
    },
  });
  