db.produos.updateMany({ nome: "Big Mac" }, { $unset: { curtidas: "" } });
