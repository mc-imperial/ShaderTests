; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 20
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main"
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "GLF_live19i"
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %10 = OpConstant %6 10
         %18 = OpTypeBool
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
               OpStore %8 %9
               OpStore %8 %10
               OpBranch %11
         %11 = OpLabel
               OpLoopMerge %13 %14 None
               OpBranch %12
         %12 = OpLabel
         %15 = OpLoad %6 %8
         %16 = OpIAdd %6 %15 %9
               OpStore %8 %16
               OpBranch %14
         %14 = OpLabel
         %17 = OpLoad %6 %8
         %19 = OpSLessThan %18 %17 %10
               OpBranchConditional %19 %11 %13
         %13 = OpLabel
               OpReturn
               OpFunctionEnd
