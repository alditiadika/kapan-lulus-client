let start = new Date().getFullYear() - 6;
let end = new Date().getFullYear() - 2;
let yearInterval = new Array(end - start).fill(0).map((_, i) => ({
  id: start + i,
  label: start + i
}));
export default {
  university: [
    { id: 1, label: "IPB" },
    { id: 2, label: "ITB" },
    { id: 3, label: "UI" },
    { id: 4, label: "ITS" }
  ],
  yearOfEntry: yearInterval,
  department: [
    {
      id: 1,
      label: "Fisika",
      topic: [
        { id: 1, label: "Fisika Teori" },
        { id: 2, label: "Fisika Instrumentasi" }
      ]
    },
    {
      id: 2,
      label: "Kimia",
      topic: [
        { id: 1, label: "Fisika Teori" },
        { id: 2, label: "Fisika Instrumentasi" }
      ]
    },
    {
      id: 3,
      label: "Biologi",
      topic: [
        { id: 1, label: "Fisika Teori" },
        { id: 2, label: "Fisika Instrumentasi" }
      ]
    },
    {
      id: 4,
      label: "Matematika",
      topic: [
        { id: 1, label: "Fisika Teori" },
        { id: 2, label: "Fisika Instrumentasi" }
      ]
    }
  ]
};
