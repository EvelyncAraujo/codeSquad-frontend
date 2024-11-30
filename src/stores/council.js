import { ref } from "vue";
import { defineStore } from "pinia";

import CouncilService from "@/services/council";
const councilService = new CouncilService();

export const useCouncilStore = defineStore("council", () => {
  const councils = ref();

  const fetchCouncils = async () => {
    const data = await councilService.fetchCouncils();
    councils.value = data;
  };

  const fetchCouncil = async (id) => {
    const data = await councilService.fetchCouncil(id);
    return data;
  }
  return { fetchCouncil, fetchCouncils, councils };
});
