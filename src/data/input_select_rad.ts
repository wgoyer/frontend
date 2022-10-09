import {
  HassEntityAttributeBase,
  HassEntityBase,
} from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";

interface InputSelectRadEntityAttributes extends HassEntityAttributeBase {
  options: string[];
}

export interface InputSelectRadEntity extends HassEntityBase {
  attributes: InputSelectRadEntityAttributes;
}

export interface InputSelectRad {
  id: string;
  name: string;
  options: string[];
  icon?: string;
  initial?: string;
}

export interface InputSelectRadMutableParams {
  name: string;
  icon: string;
  initial: string;
  options: string[];
}

export const setInputSelectRadOption = (
  hass: HomeAssistant,
  entity: string,
  option: string
) =>
  hass.callService("input_select_rad", "select_option", {
    option,
    entity_id: entity,
  });

export const fetchInputSelectRad = (hass: HomeAssistant) =>
  hass.callWS<InputSelectRad[]>({ type: "input_select_rad/list" });

export const createInputSelectRad = (
  hass: HomeAssistant,
  values: InputSelectRadMutableParams
) =>
  hass.callWS<InputSelectRad>({
    type: "input_select_rad/create",
    ...values,
  });

export const updateInputSelectRad = (
  hass: HomeAssistant,
  id: string,
  updates: Partial<InputSelectRadMutableParams>
) =>
  hass.callWS<InputSelectRad>({
    type: "input_select_rad/update",
    input_select_rad_id: id,
    ...updates,
  });

export const deleteInputSelectRad = (hass: HomeAssistant, id: string) =>
  hass.callWS({
    type: "input_select_rad/delete",
    input_select_rad_id: id,
  });
