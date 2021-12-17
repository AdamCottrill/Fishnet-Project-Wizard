import { rest } from "msw";
import { lakes, users, protocols, gear } from "./data";

const API_URL = "/fn_portal/api/v1";

export const handlers = [
  rest.get("favicon.ico", (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.get(`${API_URL}/lakes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lakes));
  }),
  rest.get(`${API_URL}/prj_ldr`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get(`${API_URL}/protocols`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(protocols));
  }),
  rest.get(`${API_URL}/gear`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gear));
  }),
  rest.get(`${API_URL}/fn011/:prj_cd`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
  // rest.post(API_URL + "/project_wizard", (req, res, ctx) => {
  //   return res(ctx.delay(500), ctx.status(201), ctx.json({ data: req.body }));
  //}),
];
