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
        tooltipAnimationType: "perspective",
        isUsingVueRouter: true,
        showBrandImageInMobilePopup: false,
        brandImage: "./img/coronavirus.png",
        menuOptionsLeft: [
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
            text: "Πληροφορίες",
            iconLeft:
              '<img src="https://img.icons8.com/windows/25/000000/info.png" style="filter: invert(100%); vertical-align: middle;"/>',
            subMenuOptions: [
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
                text: "Χάρτες",
                path: "/map",
                class: "link",
                iconLeft:
                  '<img src="https://img.icons8.com/windows/25/000000/map.png" style="filter: invert(100%); vertical-align: middle;"/>',
              },
            ],
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
.vnb {
  background-color: #26262b !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;

  &__brand-image-wrapper {
    &__link {
      &__image {
        max-width: 50px !important;
        max-height: 50px !important;
        width: 50px !important;
        height: 50px !important;
      }
    }
  }

  &__menu-options {
    &__option {
      &:not(:last-child) {
        margin-right: 0px !important;
      }

      text-decoration: none !important;
      outline: none !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      &__link {
        padding: 10px !important;
        text-decoration: none !important;
        outline: none !important;
        color: whitesmoke !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-weight: normal !important;
        transition: all 0.3s ease-in-out !important;
        border-bottom: 2px solid transparent !important;
        font-size: 14px !important;

        &:hover {
          border-bottom: 2px solid whitesmoke !important;
          background-color: lighten(#010101, 10%);
          color: whitesmoke !important;
        }
      }

      &__arrow {
        filter: invert(100%) !important;
        content: url("https://img.icons8.com/windows/32/000000/expand-arrow.png") !important;
        max-width: 14px !important;
        max-height: 14px !important;
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
      content: url("https://img.icons8.com/windows/32/000000/menu.png") !important;
    }
  }

  &__popup {
    left: 0px !important;
    top: 0px !important;
    right: 0px !important;
    background: transparent !important;
    box-shadow: 0px 0px 10px #010101 !important;

    &__top {
      background: #010101 !important;
      border: none !important;
      border-bottom-right-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
      border-top-right-radius: 0px !important;
      border-top-left-radius: 0px !important;

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
      background: #010101 !important;
      border: none !important;
      border-bottom-right-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
      transition: all 0.3s ease-in-out;

      &__sub-menu-options__option__link {
        color: whitesmoke !important;
        border-left: 2px solid transparent !important;
        font-size: 14px !important;
        background: #ffffff05 !important;

        &:hover {
          color: whitesmoke !important;
          border-left: 2px solid whitesmoke !important;
          background: lighten(#18191c, 10%) !important;
        }
      }

      &__menu-options {
        &__option {
          text-decoration: none !important;
          outline: none !important;
          -webkit-tap-highlight-color: #00000000;

          &__link {
            color: whitesmoke !important;
            border-left: 2px solid transparent !important;
            font-size: 14px !important;

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

  .tippy-arrow {
    border-bottom: 8px solid #010101 !important;
  }

  .tippy-tooltip {
    background-color: #010101 !important;
    box-shadow: 0px 0px 10px #01010150 !important;
  }

  &__sub-menu-options {
    background-color: #010101 !important;

    &__option {
      text-decoration: none !important;
      outline: none !important;
      -webkit-tap-highlight-color: #00000000;

      &__link {
        text-decoration: none !important;
        outline: none !important;
        color: whitesmoke !important;
        border-left: 2px solid transparent !important;
        font-size: 14px !important;

        &:hover {
          color: whitesmoke !important;
          border-left: 2px solid whitesmoke !important;
          background: lighten(#18191c, 10%) !important;
        }
      }
    }
  }
}
</style>
