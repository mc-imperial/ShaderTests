; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 47
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %42
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m"
               OpName %42 "_GLF_color"
               OpDecorate %42 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypeMatrix %7 2
          %9 = OpTypePointer Function %8
         %11 = OpConstant %6 1
         %12 = OpConstant %6 2
         %13 = OpConstantComposite %7 %11 %12
         %14 = OpConstant %6 3
         %15 = OpConstant %6 4
         %16 = OpConstantComposite %7 %14 %15
         %17 = OpConstantComposite %8 %13 %16
         %27 = OpTypeBool
         %30 = OpTypeVector %27 2
         %40 = OpTypeVector %6 4
         %41 = OpTypePointer Output %40
         %42 = OpVariable %41 Output
         %43 = OpConstant %6 0
         %44 = OpConstantComposite %40 %11 %43 %43 %11
         %46 = OpConstantComposite %40 %43 %43 %43 %43
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
               OpStore %10 %17
         %18 = OpLoad %8 %10
         %19 = OpTranspose %8 %18
         %20 = OpLoad %8 %10
         %21 = OpTranspose %8 %20
         %22 = OpMatrixTimesMatrix %8 %19 %21
         %23 = OpLoad %8 %10
         %24 = OpLoad %8 %10
         %25 = OpMatrixTimesMatrix %8 %23 %24
         %26 = OpTranspose %8 %25
         %28 = OpCompositeExtract %7 %22 0
         %29 = OpCompositeExtract %7 %26 0
         %31 = OpFOrdEqual %30 %28 %29
         %32 = OpAll %27 %31
         %33 = OpCompositeExtract %7 %22 1
         %34 = OpCompositeExtract %7 %26 1
         %35 = OpFOrdEqual %30 %33 %34
         %36 = OpAll %27 %35
         %37 = OpLogicalAnd %27 %32 %36
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %45
         %38 = OpLabel
               OpStore %42 %44
               OpBranch %39
         %45 = OpLabel
               OpStore %42 %46
               OpBranch %39
         %39 = OpLabel
               OpReturn
               OpFunctionEnd
