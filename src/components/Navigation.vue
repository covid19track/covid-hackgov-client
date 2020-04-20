<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Αρχική",
            path: "/",
            class: "link",
            iconLeft:
              '<img src="https://img.icons8.com/windows/25/000000/home.png" style="filter: invert(100%); vertical-align: middle;"/>',
          },
          {
            type: "link",
            text: "Διαγράμματα",
            path: "/charts",
            class: "link",
            iconLeft:
              '<img src="https://img.icons8.com/windows/25/000000/rebalance-portfolio.png" style="filter: invert(100%); vertical-align: middle;"/>',
          },
          {
            type: "link",
            text: "Πληροφορίες COVID-19",
            path: "/info",
            class: "link",
            iconLeft:
              '<img src="https://img.icons8.com/windows/25/000000/info.png" style="filter: invert(100%); vertical-align: middle;"/>',
          },
          {
            type: "link",
            text: "Χάρτης πραγματικού χρόνου",
            path: "/map",
            class: "link",
            iconLeft:
              '<img src="https://img.icons8.com/windows/25/000000/map.png" style="filter: invert(100%); vertical-align: middle;"/>',
          },
          {
            type: "link",
            text: "Προγραμματιστές",
            path: "/devs",
            class: "link",
            iconLeft:
              '<img src="https://img.icons8.com/windows/25/000000/code-file.png" style="filter: invert(100%); vertical-align: middle;"/>',
          },
        ],
        menuOptionsRight: [],
      },
    };
  }
}
</script>

<style lang="scss">
#main-navbar {
  background-color: #010101;
}

.vnb {
  padding-top: 0px !important;
  padding-bottom: 0px !important;

  &__menu-options {
    padding-left: 15px !important;

    &__option {
      &:not(:last-child) {
        margin-right: 0px !important;
      }
      text-decoration: none !important;
      outline: none !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      &__link {
        padding: 15px !important;
        text-decoration: none !important;
        outline: none !important;
        color: whitesmoke !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-weight: normal !important;
        transition: all 0.3s ease-in-out !important;
        border-bottom: 2px solid #010101 !important;

        &:hover {
          border-bottom: 2px solid whitesmoke !important;
          background-color: lighten(#010101, 10%);
          color: whitesmoke !important;
        }
      }
    }
  }

  &__collapse-button {
    padding: 15px !important;
    text-decoration: none !important;
    outline: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &__image {
      filter: invert(100%) !important;
      content: url("https://img.icons8.com/windows/32/000000/menu.png");
    }
  }

  &__popup {
    background: #18191c !important;
    box-shadow: 0px 00px 10px #010101 !important;

    &__top {
      background: #18191c !important;
      border-left: 1px solid #18191c !important;
      border-right: 1px solid #18191c !important;
      border-top: 1px solid #18191c !important;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;

      &__close-button {
        text-decoration: none !important;
        outline: none !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &__image {
          filter: invert(100%) !important;
          content: url("https://img.icons8.com/windows/26/000000/close-window.png");
          max-height: 26px !important;
        }
      }
    }

    &__bottom {
      background: #18191c !important;
      border-left: 1px solid #18191c !important;
      border-right: 1px solid #18191c !important;
      border-bottom: 1px solid #18191c !important;
      border-bottom-right-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
      transition: all 0.3s ease-in-out;

      &__menu-options {
        &__option {
          text-decoration: none !important;
          outline: none !important;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

          &__link {
            color: whitesmoke !important;
            border-left: 2px solid #18191c !important;

            &:hover {
              color: whitesmoke !important;
              border-left: 2px solid whitesmoke !important;
              background: lighten(#18191c, 10%) !important;
            }
          }
        }
      }
    }
  }
}
</style>
