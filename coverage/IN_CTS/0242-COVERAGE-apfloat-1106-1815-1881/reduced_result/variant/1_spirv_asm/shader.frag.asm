; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 8
; Bound: 23
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpDecorate %9 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpConstant %6 45.8899994
         %11 = OpConstant %6 3625.05444
         %12 = OpConstant %6 9.5
         %13 = OpConstant %6 2.0999999
         %14 = OpConstantComposite %7 %10 %11 %12 %13
         %15 = OpTypeInt 32 1
         %16 = OpTypeVector %15 4
         %17 = OpConstant %15 54843
         %18 = OpConstant %15 6405
         %19 = OpConstant %15 1
         %20 = OpConstantComposite %16 %17 %18 %19 %19
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %21 = OpBitcast %7 %20
         %22 = OpFMod %7 %14 %21
               OpStore %9 %22
               OpReturn
               OpFunctionEnd
