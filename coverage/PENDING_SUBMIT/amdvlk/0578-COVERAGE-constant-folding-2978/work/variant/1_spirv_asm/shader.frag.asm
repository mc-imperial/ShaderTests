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
               OpName %8 "func("
               OpName %25 "buf0"
               OpMemberName %25 0 "_GLF_uniform_int_values"
               OpName %27 ""
               OpName %39 "_GLF_color"
               OpDecorate %13 RelaxedPrecision
               OpDecorate %16 RelaxedPrecision
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 0
               OpDecorate %39 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypeVector %6 2
         %11 = OpConstant %6 1
         %12 = OpConstantComposite %10 %11 %11
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 1
         %17 = OpTypePointer Function %6
         %23 = OpConstant %14 2
         %24 = OpTypeArray %6 %23
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpConstant %6 0
         %29 = OpTypePointer Uniform %6
         %32 = OpTypeBool
         %36 = OpTypeFloat 32
         %37 = OpTypeVector %36 4
         %38 = OpTypePointer Output %37
         %39 = OpVariable %38 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %22 = OpFunctionCall %6 %8
         %30 = OpAccessChain %29 %27 %28 %28
         %31 = OpLoad %6 %30
         %33 = OpIEqual %32 %22 %31
               OpSelectionMerge %35 None
               OpBranchConditional %33 %34 %53
         %34 = OpLabel
         %40 = OpAccessChain %29 %27 %28 %11
         %41 = OpLoad %6 %40
         %42 = OpConvertSToF %36 %41
         %43 = OpAccessChain %29 %27 %28 %28
         %44 = OpLoad %6 %43
         %45 = OpConvertSToF %36 %44
         %46 = OpAccessChain %29 %27 %28 %28
         %47 = OpLoad %6 %46
         %48 = OpConvertSToF %36 %47
         %49 = OpAccessChain %29 %27 %28 %11
         %50 = OpLoad %6 %49
         %51 = OpConvertSToF %36 %50
         %52 = OpCompositeConstruct %37 %42 %45 %48 %51
               OpStore %39 %52
               OpBranch %35
         %53 = OpLabel
         %54 = OpAccessChain %29 %27 %28 %28
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %36 %55
         %57 = OpCompositeConstruct %37 %56 %56 %56 %56
               OpStore %39 %57
               OpBranch %35
         %35 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %18 = OpVariable %17 Function
         %13 = OpExtInst %10 %1 FindILsb %12
         %16 = OpCompositeExtract %6 %13 1
               OpStore %18 %16
         %19 = OpLoad %6 %18
               OpReturnValue %19
               OpFunctionEnd
