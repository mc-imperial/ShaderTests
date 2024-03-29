; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 62
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %37
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %13 "f"
               OpName %18 "buf0"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %37 "_GLF_color"
               OpName %39 "buf1"
               OpMemberName %39 0 "_GLF_uniform_int_values"
               OpName %41 ""
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 0
               OpDecorate %37 Location 0
               OpDecorate %38 ArrayStride 16
               OpMemberDecorate %39 0 Offset 0
               OpDecorate %39 Block
               OpDecorate %41 DescriptorSet 0
               OpDecorate %41 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpConstant %6 1
         %11 = OpConstantComposite %7 %10 %10 %10 %10
         %12 = OpTypePointer Function %6
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 2
         %17 = OpTypeArray %6 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpTypeInt 32 1
         %22 = OpConstant %21 0
         %23 = OpTypePointer Uniform %6
         %28 = OpConstant %6 2
         %31 = OpConstant %6 0
         %32 = OpTypeBool
         %36 = OpTypePointer Output %7
         %37 = OpVariable %36 Output
         %38 = OpTypeArray %21 %16
         %39 = OpTypeStruct %38
         %40 = OpTypePointer Uniform %39
         %41 = OpVariable %40 Uniform
         %42 = OpConstant %21 1
         %43 = OpTypePointer Uniform %21
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %13 = OpVariable %12 Function
               OpStore %9 %11
         %14 = OpLoad %7 %9
         %24 = OpAccessChain %23 %20 %22 %22
         %25 = OpLoad %6 %24
         %26 = OpCompositeConstruct %7 %25 %25 %25 %25
         %27 = OpExtInst %6 %1 Distance %14 %26
         %29 = OpExtInst %6 %1 Pow %27 %28
               OpStore %13 %29
         %30 = OpLoad %6 %13
         %33 = OpFOrdEqual %32 %30 %31
               OpSelectionMerge %35 None
               OpBranchConditional %33 %34 %57
         %34 = OpLabel
         %44 = OpAccessChain %43 %41 %22 %42
         %45 = OpLoad %21 %44
         %46 = OpConvertSToF %6 %45
         %47 = OpAccessChain %43 %41 %22 %22
         %48 = OpLoad %21 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpAccessChain %43 %41 %22 %22
         %51 = OpLoad %21 %50
         %52 = OpConvertSToF %6 %51
         %53 = OpAccessChain %43 %41 %22 %42
         %54 = OpLoad %21 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpCompositeConstruct %7 %46 %49 %52 %55
               OpStore %37 %56
               OpBranch %35
         %57 = OpLabel
         %58 = OpAccessChain %43 %41 %22 %22
         %59 = OpLoad %21 %58
         %60 = OpConvertSToF %6 %59
         %61 = OpCompositeConstruct %7 %60 %60 %60 %60
               OpStore %37 %61
               OpBranch %35
         %35 = OpLabel
               OpReturn
               OpFunctionEnd
