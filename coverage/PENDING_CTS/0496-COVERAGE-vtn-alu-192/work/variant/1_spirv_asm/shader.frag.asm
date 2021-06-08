; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 46
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %41
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m"
               OpName %41 "_GLF_color"
               OpDecorate %41 Location 0
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
         %22 = OpConstant %6 0.5
         %23 = OpConstant %6 1.5
         %24 = OpConstantComposite %7 %22 %23
         %25 = OpConstantComposite %8 %24 %13
         %26 = OpTypeBool
         %29 = OpTypeVector %26 2
         %39 = OpTypeVector %6 4
         %40 = OpTypePointer Output %39
         %41 = OpVariable %40 Output
         %42 = OpConstant %6 0
         %43 = OpConstantComposite %39 %11 %42 %42 %11
         %45 = OpConstantComposite %39 %42 %42 %42 %42
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %18 = OpTranspose %8 %17
         %19 = OpFDiv %6 %11 %12
         %20 = OpMatrixTimesScalar %8 %18 %19
               OpStore %10 %20
         %21 = OpLoad %8 %10
         %27 = OpCompositeExtract %7 %21 0
         %28 = OpCompositeExtract %7 %25 0
         %30 = OpFOrdEqual %29 %27 %28
         %31 = OpAll %26 %30
         %32 = OpCompositeExtract %7 %21 1
         %33 = OpCompositeExtract %7 %25 1
         %34 = OpFOrdEqual %29 %32 %33
         %35 = OpAll %26 %34
         %36 = OpLogicalAnd %26 %31 %35
               OpSelectionMerge %38 None
               OpBranchConditional %36 %37 %44
         %37 = OpLabel
               OpStore %41 %43
               OpBranch %38
         %44 = OpLabel
               OpStore %41 %45
               OpBranch %38
         %38 = OpLabel
               OpReturn
               OpFunctionEnd
