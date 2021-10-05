; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 27
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %25
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "func("
               OpName %25 "_GLF_color"
               OpDecorate %25 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypeFunction %7
         %11 = OpTypeInt 32 1
         %12 = OpConstant %11 0
         %16 = OpConstant %6 1
         %17 = OpConstant %6 0
         %18 = OpConstantComposite %7 %16 %17 %17 %16
         %20 = OpConstantComposite %7 %17 %17 %17 %17
         %24 = OpTypePointer Output %7
         %25 = OpVariable %24 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %26 = OpFunctionCall %7 %9
               OpStore %25 %26
               OpReturn
               OpFunctionEnd
          %9 = OpFunction %7 None %8
         %10 = OpLabel
               OpSelectionMerge %15 None
               OpSwitch %12 %14 0 %13
         %14 = OpLabel
               OpReturnValue %20
         %13 = OpLabel
               OpReturnValue %18
         %15 = OpLabel
               OpUnreachable
               OpFunctionEnd
