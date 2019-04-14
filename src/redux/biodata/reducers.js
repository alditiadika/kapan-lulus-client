import type from "./types";
import { bindActionCreators } from "redux";
const initialState = {
  universitas: null,
  tahunMasuk: null,
  bidangStudi: null,
  IDMahasiswa: null,
  note: null,
  dataKTM: null,
  kodeVerifikasi: null,
  fotoProfil: null,
  topikPenelitian: null,
  estimasiKelulusan: null
};

export default (state = { ...initialState }, action) => {
  switch (bindActionCreators.type) {
    case type.firstButton: {
      return {
        ...state
      };
    }
    case type.seconButton: {
      return {
        ...state
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
