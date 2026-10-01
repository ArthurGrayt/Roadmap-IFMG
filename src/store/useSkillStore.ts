import { create } from 'zustand';

interface SkillStore {
  acquiredSkills: Set<string>;
  toggleSkill: (skillId: string, isActive: boolean, nodesToDeactivate?: string[]) => void;
  isSkillAcquired: (skillId: string) => boolean;
  careerTrail: string[];
  setCareerTrail: (skills: string[]) => void;
  activeRole: string | null;
  setActiveRole: (role: string | null) => void;
  userName: string;
  userPhoto: string | null;
  isOnboarded: boolean;
  setUserData: (name: string, photo: string | null) => void;
}

export const useSkillStore = create<SkillStore>((set, get) => ({
  acquiredSkills: new Set<string>(),
  
  toggleSkill: (skillId, isActive, nodesToDeactivate = []) => {
    set((state) => {
      const newSet = new Set(state.acquiredSkills);
      if (isActive) {
        newSet.add(skillId);
      } else {
        newSet.delete(skillId);
        nodesToDeactivate.forEach(id => newSet.delete(id));
      }
      return { acquiredSkills: newSet };
    });
  },

  isSkillAcquired: (skillId) => {
    return get().acquiredSkills.has(skillId);
  },

  careerTrail: [],
  setCareerTrail: (skills) => set({ careerTrail: skills }),
  
  activeRole: null,
  setActiveRole: (role) => set({ activeRole: role }),

  userName: "Estudante",
  userPhoto: null,
  isOnboarded: false,
  setUserData: (name, photo) => set({ userName: name, userPhoto: photo, isOnboarded: true }),
}));
