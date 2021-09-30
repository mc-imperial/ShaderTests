; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 51
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %24
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "buf1"
               OpMemberName %8 0 "one"
               OpName %10 ""
               OpName %24 "_GLF_color"
               OpName %28 "buf0"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpMemberDecorate %8 0 Offset 0
               OpDecorate %8 Block
               OpDecorate %10 DescriptorSet 0
               OpDecorate %10 Binding 1
               OpDecorate %24 Location 0
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpConstant %6 -1
          %8 = OpTypeStruct %6
          %9 = OpTypePointer Uniform %8
         %10 = OpVariable %9 Uniform
         %11 = OpTypeInt 32 1
         %12 = OpConstant %11 0
         %13 = OpTypePointer Uniform %6
         %17 = OpConstant %6 1
         %18 = OpTypeBool
         %22 = OpTypeVector %6 4
         %23 = OpTypePointer Output %22
         %24 = OpVariable %23 Output
         %25 = OpTypeInt 32 0
         %26 = OpConstant %25 2
         %27 = OpTypeArray %11 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpConstant %11 1
         %32 = OpTypePointer Uniform %11
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %14 = OpAccessChain %13 %10 %12
         %15 = OpLoad %6 %14
         %16 = OpExtInst %6 %1 FMin %7 %15
         %19 = OpFOrdLessThan %18 %16 %17
               OpSelectionMerge %21 None
               OpBranchConditional %19 %20 %46
         %20 = OpLabel
         %33 = OpAccessChain %32 %30 %12 %31
         %34 = OpLoad %11 %33
         %35 = OpConvertSToF %6 %34
         %36 = OpAccessChain %32 %30 %12 %12
         %37 = OpLoad %11 %36
         %38 = OpConvertSToF %6 %37
         %39 = OpAccessChain %32 %30 %12 %12
         %40 = OpLoad %11 %39
         %41 = OpConvertSToF %6 %40
         %42 = OpAccessChain %32 %30 %12 %31
         %43 = OpLoad %11 %42
         %44 = OpConvertSToF %6 %43
         %45 = OpCompositeConstruct %22 %35 %38 %41 %44
               OpStore %24 %45
               OpBranch %21
         %46 = OpLabel
         %47 = OpAccessChain %32 %30 %12 %12
         %48 = OpLoad %11 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpCompositeConstruct %22 %49 %49 %49 %49
               OpStore %24 %50
               OpBranch %21
         %21 = OpLabel
               OpReturn
               OpFunctionEnd
