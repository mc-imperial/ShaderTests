; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 59
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %42
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %42 "_GLF_color"
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %42 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeVector %6 2
         %10 = OpConstant %6 0
         %11 = OpConstant %6 1
         %12 = OpConstantComposite %9 %10 %11
         %13 = OpTypeInt 32 1
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 3
         %16 = OpTypeArray %13 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %13 0
         %21 = OpConstant %13 1
         %22 = OpTypePointer Uniform %13
         %27 = OpConstant %6 2
         %28 = OpConstant %6 3
         %29 = OpConstantComposite %9 %27 %28
         %36 = OpTypeBool
         %40 = OpTypeVector %6 4
         %41 = OpTypePointer Output %40
         %42 = OpVariable %41 Output
         %46 = OpConstant %13 2
         %58 = OpConstantComposite %40 %10 %10 %10 %10
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %23 = OpAccessChain %22 %19 %20 %21
         %24 = OpLoad %13 %23
         %25 = OpConvertSToF %6 %24
         %26 = OpCompositeConstruct %9 %25 %11
         %30 = OpExtInst %9 %1 FMax %26 %29
         %31 = OpDot %6 %12 %30
               OpStore %8 %31
         %32 = OpLoad %6 %8
         %33 = OpConvertFToS %13 %32
         %34 = OpAccessChain %22 %19 %20 %20
         %35 = OpLoad %13 %34
         %37 = OpIEqual %36 %33 %35
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %57
         %38 = OpLabel
         %43 = OpAccessChain %22 %19 %20 %21
         %44 = OpLoad %13 %43
         %45 = OpConvertSToF %6 %44
         %47 = OpAccessChain %22 %19 %20 %46
         %48 = OpLoad %13 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpAccessChain %22 %19 %20 %46
         %51 = OpLoad %13 %50
         %52 = OpConvertSToF %6 %51
         %53 = OpAccessChain %22 %19 %20 %21
         %54 = OpLoad %13 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpCompositeConstruct %40 %45 %49 %52 %55
               OpStore %42 %56
               OpBranch %39
         %57 = OpLabel
               OpStore %42 %58
               OpBranch %39
         %39 = OpLabel
               OpReturn
               OpFunctionEnd
