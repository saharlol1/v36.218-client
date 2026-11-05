import { base } from "../lib/constants";
import { ArmPatcher } from "../lib/arm_patcher";

const addresses = [
    {addr: [0x4948C4, 0x48C64C], name: "g_createGameInstance"},
    {addr: [0x87E75C, 0x887FCC], name: "GameMain::GameMain"},
    {addr: [0x417170, 0x417F24], name: "ResourceManager::init"},
    {addr: [0x498AA4, 0x499CBC], name: "InputSystem::update"},
    {addr: [0x64B5D0, 0x64C0E0], name: "Messaging::connect"},
    {addr: [0x483D00, 0x484B08], name: "LoginMessage::encode"},
    {addr: [0x68A038, 0x68B2A0], name: "CombatHUD::ultiButtonActivated"}
];

export function arxanKiller() {
    for (let i of addresses)
        ArmPatcher.jumpout(base.add(i.addr[0]), base.add(i.addr[1]));
    ArmPatcher.ret(base.add(0x863778)); // AntiCheat::guard_callback
}