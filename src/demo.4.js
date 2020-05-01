import React from "react";
import CheckboxTree from "./tree/CheckboxTree";
import "./less/react-checkbox-tree.css";
import Accordion from "./accordion/Accordion";
import AccordionItem from "./accordion/AccordionItem";
import CheckBoxList from "./checkbox/CheckBoxList";
import "../src/accordion/index.css";
// import ReactRadioGroup from "react-simple-radio-button";
import ReactRadioGroup from "./radio-button/ReactSimpleRadioButton";
import Card from "./card/Card";
import Title from "./card/Title";

import "../src/card/card.css";

import Modal from "./modal/Modal";

const PostsData = [
  {
    category: "News",
    title: "CNN Acquire BEME 1",
    text:
      "Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat, Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle 2",
    text:
      "Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    category: "Development",
    title: "React and the WP-API 3",
    text:
      "Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    category: "News",
    title: "CNN Acquire BEME 4",
    text: "",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle 5",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    category: "Development",
    title: "React and the WP-API 6",
    text: "The first ever decoupled starter theme for React & the WP-API",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    category: "Development",
    title: "React and the WP-API 7",
    text:
      "Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatatEgestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat! Pede voluptatibus tristique adipiscing, eleifend vestibulum, dolore, eveniet facilis ipsa, deleniti sit repudiandae temporibus esse hic! Primis phasellus ut vestibulum pellentesque condimentum laboris sed? Molestie torquent, occaecati natoque, quisque nostra sunt, nibh, consequuntur turpis eros aut justo qui recusandae eos, soluta repellat ipsa tortor tempus ultrices dis, unde voluptates venenatis placeat praesent suscipit maxime, lacus eleifend? Iste nisi fermentum! Corporis accusamus dictum! Sapien laboris massa fugit deserunt laboriosam mi consectetur curabitur cum. Egestas mollitia quos metus natus assumenda ullam suscipit ultricies. Voluptas, nihil natoque elementum error ligula exercitationem aliquid tempor mauris penatibus. Suspendisse! Rutrum volutpat adipiscing nascetur cras conubia cupidatat",
    date: "15 Apr 2020",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
];

const nodes = [
  {
    label: "big data",
    value: "big data",
    children: [
      { label: "big data v ", value: "true x" },
      { label: "big data b", value: "y" },
      { label: "big data c", value: "c" },
      { label: "big data d", value: "b" },
      { label: "big data e", value: "d" },
      { label: "big data f", value: "s" }
    ]
  }
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadMore: false,
      isShowing: false,
      activeClickedItems: [0],
      activeHoveredItems: [0],
      isAllSelected: false,
      subTitile: "",
      checked: [
        "/app/Http/Controllers/WelcomeController.js",
        "/app/Http/routes.js",
        "/public/assets/style.css",
        "/public/index.html",
        "/.gitignore"
      ],
      expanded: ["/app"],
      filterText: "",
      nodesFiltered: nodes,
      nodes,
      checkList: [
        {
          name: "city",
          value: "bangalore",
          checked: false
        },
        {
          name: "city",
          value: "chennai",
          checked: false
        },
        {
          name: "city",
          value: "delhi",
          checked: false
        }
      ]
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  onClickButton = event => {
    console.log("key: ", event.target.value);
    let value = event.target.value;
    // if (value.toLowerCase() === "all") {
    //   value = "All +";
    //   this.setState({ subTitile: value });
    // } else {
    //   value = value + " - ";
    //   this.setState({ subTitile: value });
    // }
    this.setState({ subTitle: value });
  };

  toggleActive = index => {
    const position = this.state.activeClickedItems.indexOf(index);

    if (position !== -1) {
      this.setState({ activeClickedItems: [] });
    } else {
      this.setState({ activeClickedItems: [index] });
    }
  };

  handleClick({ activeItems }) {
    this.setState({ activeClickedItems: activeItems });
  }

  onCheck = checked => {
    this.setState({ checked });
  };

  onExpand = expanded => {
    this.setState({ expanded });
  };

  onCheckBoxChange = (checkName, isChecked) => {
    console.log("key: ", isChecked);
    let isAllChecked = checkName === "all" && isChecked;
    let isAllUnChecked = checkName === "all" && !isChecked;
    const checked = isChecked;

    const checkList = this.state.checkList.map((city, index) => {
      if (isAllChecked || city.value === checkName) {
        return Object.assign({}, city, {
          checked
        });
      } else if (isAllUnChecked) {
        return Object.assign({}, city, {
          checked: false
        });
      }

      return city;
    });

    let isAllSelected =
      checkList.findIndex(item => item.checked === false) === -1 ||
      isAllChecked;

    this.setState({
      checkList,
      isAllSelected
    });
  };

  onFilterChange = e => {
    this.setState({ filterText: e.target.value }, this.filterTree);
  };

  filterTree = () => {
    // Reset nodes back to unfiltered state
    if (!this.state.filterText) {
      this.setState(prevState => ({
        nodesFiltered: prevState.nodes
      }));

      return;
    }

    const nodesFiltered = prevState => ({
      nodesFiltered: prevState.nodes.reduce(this.filterNodes, [])
    });

    this.setState(nodesFiltered);
  };

  filterNodes = (filtered, node) => {
    const { filterText } = this.state;
    const children = (node.children || []).reduce(this.filterNodes, []);

    if (
      // Node's label matches the search string
      node.label.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >
        -1 ||
      // Or a children has a matching node
      children.length
    ) {
      filtered.push({ ...node, children });
    }

    return filtered;
  };

  onOptionSelect = value => {
    console.log(value);
  };

  display = PostsData => {
    let indents = [];
    for (var i = 0; i < PostsData.length; i++) {
      if (PostsData.length - i >= 2) {
        indents.push(
          <div>
            <Card key={i} index={i} details={PostsData[i]} />
            <Card key={i + 1} index={i + 1} details={PostsData[i + 1]} />
          </div>
        );
      } else {
        indents.push(
          <div>
            <Card key={i} index={i} details={PostsData[i]} />
          </div>
        );
      }

      i = i + 1;
    }

    return indents;
  };

  render() {
    return (
      // <div>
      //   {this.state.isShowing ? (
      //     <div onClick={this.closeModalHandler} className="back-shed"></div>
      //   ) : null}

      //   <button className="open-modal-btn" onClick={this.openModalHandler}>
      //     Open Modal
      //   </button>

      //   <Modal
      //     className="modal"
      //     show={this.state.isShowing}
      //     close={this.closeModalHandler}
      //   ></Modal>
      // </div>
      // <div>
      //   <div className="app-card-list" id="app-card-list">
      //     {/* {this.display(PostsData)} */}
      //     {Object.keys(PostsData).map(key => (
      //       <div>
      //         <Card key={key} index={key} details={PostsData[key]} />
      //         <Card key={key} index={key} details={PostsData[key]} />
      //       </div>
      //     ))}
      //   </div>
      // </div>

      <div>
        <div>
          {PostsData.map((item, index) => (
            <div key={index} item={item}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // render() {
  //   const { checked, expanded, filterText, nodesFiltered } = this.state;

  //   return (
  //     <div className="filter-container">
  //       <Accordion atomic={true}>
  //         <AccordionItem title="Title x" subTitle={this.state.subTitle}>
  //           <div>
  //             <input
  //               className="filter-text"
  //               placeholder="Search..."
  //               type="text"
  //               value={filterText}
  //               onChange={this.onFilterChange}
  //             />
  //             <CheckboxTree
  //               checked={checked}
  //               expanded={expanded}
  //               iconsClass="fa5"
  //               nativeCheckboxes={true}
  //               nodes={nodesFiltered}
  //               onCheck={this.onCheck}
  //               onExpand={this.onExpand}
  //             />
  //           </div>
  //         </AccordionItem>
  //       </Accordion>

  //       <Accordion atomic={true}>
  //         <AccordionItem title="Title x" subTitle={this.state.subTitle}>
  //           <div>
  //             <CheckBoxList
  //               options={this.state.checkList}
  //               onClickButton={this.onClickButton}
  //               onCheck={this.onCheckBoxChange}
  //             />
  //           </div>
  //         </AccordionItem>
  //       </Accordion>
  //       <ReactRadioGroup
  //         defaultSelected="Option 3"
  //         onChange={this.onOptionSelect}
  //         options={["Option 1", "Option 2", "Option 3", "Option 4"]}
  //       />
  //     </div>
  //   );
  // }
}

// ReactDOM.render(<Demo />, document.getElementById('demo'));
