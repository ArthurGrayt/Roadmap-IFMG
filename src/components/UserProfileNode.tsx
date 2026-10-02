import React, { useRef, useState } from "react";
import { Sparkles, ShieldCheck, Award, Upload, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Handle, Position } from "@xyflow/react";
import { useSkillStore } from "@/store/useSkillStore";
import { CAREER_DATA } from "@/data/rolesData";

export const UserProfileNode = ({ data }: any) => {
  const acquiredSkills = useSkillStore((state) => state.acquiredSkills);
  const userName = useSkillStore((state) => state.userName);
  const userPhoto = useSkillStore((state) => state.userPhoto);
  const setUserData = useSkillStore((state) => state.setUserData);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNameSave = () => {
    if (editName.trim() !== "") {
      setUserData(editName.trim(), userPhoto);
    } else {
      setEditName(userName); // revert
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleNameSave();
    if (e.key === "Escape") {
      setEditName(userName);
      setIsEditing(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(userName, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Determina as profissões concluídas (todas as skills da role estão em acquiredSkills)
  const completedRoles: string[] = [];
  CAREER_DATA.forEach((category) => {
    category.roles.forEach((role) => {
      // Ignora roles vazias/sem requisitos configurados
      if (role.skills && role.skills.length > 0) {
        const isCompleted = role.skills.every((skillId) => acquiredSkills.has(skillId));
        if (isCompleted) {
          completedRoles.push(role.name);
        }
      }
    });
  });

  return (
    <div className="flex flex-col items-center group relative cursor-pointer w-[400px]">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        className="!opacity-0 border-none bg-transparent"
      />
      <div className="relative">
        <div
          className="relative p-2 rounded-2xl bg-[#1A2128] group/avatar cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {userPhoto ? (
            <img
              src={userPhoto}
              alt="Avatar do Usuário"
              className="w-48 h-48 rounded-xl object-cover pointer-events-none transition-all group-hover/avatar:brightness-50"
            />
          ) : (
            <div className="w-48 h-48 rounded-xl pointer-events-none transition-all group-hover/avatar:brightness-50 flex items-center justify-center bg-[#0B4A5D]">
              <svg viewBox="0 0 100 130" className="w-24 h-24 fill-white">
                {/* Coluna 1 (A letra I) */}
                <circle cx="20" cy="20" r="12" />
                <rect x="8" y="38" width="24" height="24" rx="3" />
                <rect x="8" y="68" width="24" height="24" rx="3" />
                <rect x="8" y="98" width="24" height="24" rx="3" />

                {/* Coluna 2 (A haste do F) */}
                <rect x="38" y="8" width="24" height="24" rx="3" />
                <rect x="38" y="38" width="24" height="24" rx="3" />
                <rect x="38" y="68" width="24" height="24" rx="3" />
                <rect x="38" y="98" width="24" height="24" rx="3" />

                {/* Coluna 3 (As pernas do F) */}
                <rect x="68" y="8" width="24" height="24" rx="3" />
                <rect x="68" y="68" width="24" height="24" rx="3" />
              </svg>
            </div>
          )}

          {/* Overlay de Hover para trocar foto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
            <Upload className="w-8 h-8 text-white mb-2" />
            <span className="text-white text-sm font-semibold">Trocar Foto</span>
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handlePhotoUpload}
        />
      </div>

      {/* Informações: Nome e Cargo mockados abaixo da imagem */}
      <div className="mt-6 flex flex-col items-center px-8 py-5 rounded-2xl bg-[#1A2128]/80 backdrop-blur-xl border border-white/10">
        <div className="flex items-center justify-center w-full min-h-[40px]">
          {isEditing ? (
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onBlur={handleNameSave}
              onKeyDown={handleKeyDown}
              autoFocus
              className="text-2xl font-bold text-center bg-white/10 border border-emerald-500/50 rounded-lg px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full max-w-[250px]"
            />
          ) : (
            <div
              className="flex items-center gap-3 group/name cursor-pointer"
              onClick={() => {
                setEditName(userName);
                setIsEditing(true);
              }}
            >
              <h2 className="text-2xl font-bold text-white tracking-wide">{userName}</h2>
              <button
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 opacity-0 group-hover/name:opacity-100 transition-all"
                title="Editar Nome"
              >
                <Pencil className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          )}
        </div>
        {completedRoles.length > 0 ? (
          <div className="mt-4 flex flex-col gap-3 w-full">
            <AnimatePresence>
              {completedRoles.map((role) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.5 }}
                  className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                  <Award className="w-6 h-6 shrink-0" />
                  <span className="text-lg font-bold text-center leading-tight">{role}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <p className="text-base text-neutral-400 font-medium flex items-center gap-2 mt-2">
            Estudante de S.I no IFMG
          </p>
        )}
      </div>
    </div>
  );
};
