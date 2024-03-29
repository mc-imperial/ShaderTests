; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 58
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %39
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %27 "buf1"
               OpMemberName %27 0 "_GLF_uniform_float_values"
               OpName %29 ""
               OpName %39 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 1
               OpDecorate %39 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 1
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %9 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %9 0
         %17 = OpConstant %9 1
         %18 = OpTypePointer Uniform %9
         %25 = OpConstant %10 1
         %26 = OpTypeArray %6 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpTypePointer Uniform %6
         %33 = OpTypeBool
         %37 = OpTypeVector %6 4
         %38 = OpTypePointer Output %37
         %39 = OpVariable %38 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpAccessChain %18 %15 %16 %17
         %20 = OpLoad %9 %19
         %21 = OpConvertSToF %6 %20
         %22 = OpExtInst %6 %1 Trunc %21
         %23 = OpExtInst %6 %1 Fract %22
               OpStore %8 %23
         %24 = OpLoad %6 %8
         %31 = OpAccessChain %30 %29 %16 %16
         %32 = OpLoad %6 %31
         %34 = OpFOrdEqual %33 %24 %32
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %53
         %35 = OpLabel
         %40 = OpAccessChain %18 %15 %16 %17
         %41 = OpLoad %9 %40
         %42 = OpConvertSToF %6 %41
         %43 = OpAccessChain %18 %15 %16 %16
         %44 = OpLoad %9 %43
         %45 = OpConvertSToF %6 %44
         %46 = OpAccessChain %18 %15 %16 %16
         %47 = OpLoad %9 %46
         %48 = OpConvertSToF %6 %47
         %49 = OpAccessChain %18 %15 %16 %17
         %50 = OpLoad %9 %49
         %51 = OpConvertSToF %6 %50
         %52 = OpCompositeConstruct %37 %42 %45 %48 %51
               OpStore %39 %52
               OpBranch %36
         %53 = OpLabel
         %54 = OpAccessChain %18 %15 %16 %16
         %55 = OpLoad %9 %54
         %56 = OpConvertSToF %6 %55
         %57 = OpCompositeConstruct %37 %56 %56 %56 %56
               OpStore %39 %57
               OpBranch %36
         %36 = OpLabel
               OpReturn
               OpFunctionEnd
