import * as yup from "yup";
// overlapping periods

yup.addMethod(yup.array, "uniqueSsn", function (message) {
  return this.test("uniqueSsn", message, function (list) {
    const mapper = (x) => x.ssn;
    const set = [...new Set(list.map(mapper))];
    const isUnique = list.length === set.length;
    if (isUnique) {
      return true;
    }

    const idx = list.findIndex((l, i) => mapper(l) !== set[i]);
    return this.createError({
      path: `fn022.[${idx}].ssn`,
      message: message,
    });
  });
});

yup.addMethod(yup.array, "uniqueSsnDes", function (message) {
  return this.test("uniqueSsn", message, function (list) {
    const mapper = (x) => x.ssn_des;
    const set = [...new Set(list.map(mapper))];
    const isUnique = list.length === set.length;
    if (isUnique) {
      return true;
    }

    const idx = list.findIndex((l, i) => mapper(l) !== set[i]);
    return this.createError({
      path: `fn022.[${idx}].ssn_des`,
      message: message,
    });
  });
});

const FN022schema = yup.object().shape({
  fn022: yup
    .array()
    .min(1, "At least 1 season must be provided")
    .of(
      yup.object().shape({
        ssn: yup.string().required("SSN is required"),
        ssn_des: yup.string().required("SSN_DES is required"),
        ssn_date0: yup
          .date()
          .transform((curr, orig) => (orig === "" ? null : curr))
          .nullable()
          .required("Season start is required")
          .test(
            "prj_date0-ssn_date0",
            "Season start date occurs before Project start date",
            (value, context) => {
              const prj_date0 = new Date(context.options.prj_date0);
              prj_date0.setHours(0, 0, 0, 0);
              return value >= prj_date0;
            }
          ),
        ssn_date1: yup
          .date()
          .transform((curr, orig) => (orig === "" ? null : curr))
          .nullable()
          .required("Season end is required")
          .min(
            yup.ref("ssn_date0"),
            "Season end date can't be before start date."
          )
          .test(
            "prj_date1-ssn_date1",
            "Season end date occurs after Project end date",
            (value, context) => {
              const prj_date1 = new Date(context.options.prj_date1);
              prj_date1.setHours(0, 0, 0, 0);
              return value <= prj_date1;
            }
          ),
      })
    )
    .uniqueSsn("Season must be unique")
    .uniqueSsnDes("Season Description must be unique"),
});

export default FN022schema;