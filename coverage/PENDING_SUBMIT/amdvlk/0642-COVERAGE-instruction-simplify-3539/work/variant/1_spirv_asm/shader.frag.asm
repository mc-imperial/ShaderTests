; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 94
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %12 "f"
               OpName %16 "tex"
               OpName %21 "buf0"
               OpMemberName %21 0 "_GLF_uniform_float_values"
               OpName %23 ""
               OpName %47 "buf3"
               OpMemberName %47 0 "zero"
               OpName %49 ""
               OpName %64 "buf1"
               OpMemberName %64 0 "_GLF_uniform_int_values"
               OpName %66 ""
               OpName %75 "_GLF_color"
               OpDecorate %16 RelaxedPrecision
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 2
               OpDecorate %17 RelaxedPrecision
               OpDecorate %20 ArrayStride 16
               OpMemberDecorate %21 0 Offset 0
               OpDecorate %21 Block
               OpDecorate %23 DescriptorSet 0
               OpDecorate %23 Binding 0
               OpDecorate %28 RelaxedPrecision
               OpDecorate %30 RelaxedPrecision
               OpDecorate %32 RelaxedPrecision
               OpMemberDecorate %47 0 Offset 0
               OpDecorate %47 Block
               OpDecorate %49 DescriptorSet 0
               OpDecorate %49 Binding 3
               OpDecorate %63 ArrayStride 16
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 1
               OpDecorate %75 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypePointer Function %10
         %13 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %14 = OpTypeSampledImage %13
         %15 = OpTypePointer UniformConstant %14
         %16 = OpVariable %15 UniformConstant
         %18 = OpTypeInt 32 0
         %19 = OpConstant %18 2
         %20 = OpTypeArray %10 %19
         %21 = OpTypeStruct %20
         %22 = OpTypePointer Uniform %21
         %23 = OpVariable %22 Uniform
         %24 = OpTypePointer Uniform %10
         %27 = OpTypeVector %10 2
         %29 = OpTypeVector %10 4
         %31 = OpConstant %18 1
         %41 = OpTypeBool
         %44 = OpConstant %6 4
         %47 = OpTypeStruct %10
         %48 = OpTypePointer Uniform %47
         %49 = OpVariable %48 Uniform
         %52 = OpConstant %6 1
         %62 = OpConstant %18 3
         %63 = OpTypeArray %6 %62
         %64 = OpTypeStruct %63
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
         %67 = OpConstant %6 2
         %68 = OpTypePointer Uniform %6
         %74 = OpTypePointer Output %29
         %75 = OpVariable %74 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %11 Function
               OpStore %8 %9
         %17 = OpLoad %14 %16
         %25 = OpAccessChain %24 %23 %9 %9
         %26 = OpLoad %10 %25
         %28 = OpCompositeConstruct %27 %26 %26
         %30 = OpImageSampleImplicitLod %29 %17 %28
         %32 = OpCompositeExtract %10 %30 1
               OpStore %12 %32
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %37
         %37 = OpLabel
         %38 = OpLoad %10 %12
         %39 = OpAccessChain %24 %23 %9 %9
         %40 = OpLoad %10 %39
         %42 = OpFOrdLessThanEqual %41 %38 %40
         %43 = OpLoad %6 %8
         %45 = OpSLessThan %41 %43 %44
         %46 = OpLogicalAnd %41 %42 %45
               OpBranchConditional %46 %34 %35
         %34 = OpLabel
         %50 = OpAccessChain %24 %49 %9
         %51 = OpLoad %10 %50
         %53 = OpAccessChain %24 %23 %9 %52
         %54 = OpLoad %10 %53
         %55 = OpFOrdLessThan %41 %51 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
               OpBranch %36
         %57 = OpLabel
         %59 = OpLoad %6 %8
         %60 = OpIAdd %6 %59 %52
               OpStore %8 %60
               OpBranch %36
         %36 = OpLabel
               OpBranch %33
         %35 = OpLabel
         %61 = OpLoad %6 %8
         %69 = OpAccessChain %68 %66 %9 %67
         %70 = OpLoad %6 %69
         %71 = OpIEqual %41 %61 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %89
         %72 = OpLabel
         %76 = OpAccessChain %68 %66 %9 %9
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %10 %77
         %79 = OpAccessChain %68 %66 %9 %52
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %10 %80
         %82 = OpAccessChain %68 %66 %9 %52
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %10 %83
         %85 = OpAccessChain %68 %66 %9 %9
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %10 %86
         %88 = OpCompositeConstruct %29 %78 %81 %84 %87
               OpStore %75 %88
               OpBranch %73
         %89 = OpLabel
         %90 = OpAccessChain %68 %66 %9 %52
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %10 %91
         %93 = OpCompositeConstruct %29 %92 %92 %92 %92
               OpStore %75 %93
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
