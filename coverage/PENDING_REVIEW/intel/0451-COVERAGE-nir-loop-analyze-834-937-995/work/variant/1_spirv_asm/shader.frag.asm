; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 93
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %74
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "texel"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_float_values"
               OpName %19 ""
               OpName %51 "tex"
               OpName %63 "buf1"
               OpMemberName %63 0 "_GLF_uniform_int_values"
               OpName %65 ""
               OpName %74 "_GLF_color"
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %51 RelaxedPrecision
               OpDecorate %51 DescriptorSet 0
               OpDecorate %51 Binding 2
               OpDecorate %52 RelaxedPrecision
               OpDecorate %56 RelaxedPrecision
               OpDecorate %57 RelaxedPrecision
               OpDecorate %62 ArrayStride 16
               OpMemberDecorate %63 0 Offset 0
               OpDecorate %63 Block
               OpDecorate %65 DescriptorSet 0
               OpDecorate %65 Binding 1
               OpDecorate %74 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Function %11
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 2
         %16 = OpTypeArray %10 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %6 0
         %21 = OpTypePointer Uniform %10
         %30 = OpTypeBool
         %31 = OpConstantFalse %30
         %35 = OpTypePointer Function %10
         %42 = OpConstant %6 5
         %48 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %49 = OpTypeSampledImage %48
         %50 = OpTypePointer UniformConstant %49
         %51 = OpVariable %50 UniformConstant
         %55 = OpTypeVector %10 2
         %61 = OpConstant %14 3
         %62 = OpTypeArray %6 %61
         %63 = OpTypeStruct %62
         %64 = OpTypePointer Uniform %63
         %65 = OpVariable %64 Uniform
         %66 = OpConstant %6 2
         %67 = OpTypePointer Uniform %6
         %73 = OpTypePointer Output %11
         %74 = OpVariable %73 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
               OpStore %8 %9
         %22 = OpAccessChain %21 %19 %20 %20
         %23 = OpLoad %10 %22
         %24 = OpCompositeConstruct %11 %23 %23 %23 %23
               OpStore %13 %24
               OpBranch %25
         %25 = OpLabel
               OpLoopMerge %27 %28 None
               OpBranch %29
         %29 = OpLabel
         %32 = OpLogicalNot %30 %31
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %34
         %33 = OpLabel
         %36 = OpAccessChain %35 %13 %15
         %37 = OpLoad %10 %36
         %38 = OpAccessChain %21 %19 %20 %9
         %39 = OpLoad %10 %38
         %40 = OpFUnordNotEqual %30 %37 %39
         %41 = OpLoad %6 %8
         %43 = OpSLessThan %30 %41 %42
         %44 = OpLogicalAnd %30 %40 %43
         %45 = OpLogicalNot %30 %44
               OpBranch %34
         %34 = OpLabel
         %46 = OpPhi %30 %31 %29 %45 %33
         %47 = OpLogicalNot %30 %46
               OpBranchConditional %47 %26 %27
         %26 = OpLabel
         %52 = OpLoad %49 %51
         %53 = OpAccessChain %21 %19 %20 %20
         %54 = OpLoad %10 %53
         %56 = OpCompositeConstruct %55 %54 %54
         %57 = OpImageSampleImplicitLod %11 %52 %56
               OpStore %13 %57
         %58 = OpLoad %6 %8
         %59 = OpIAdd %6 %58 %9
               OpStore %8 %59
               OpBranch %28
         %28 = OpLabel
               OpBranch %25
         %27 = OpLabel
         %60 = OpLoad %6 %8
         %68 = OpAccessChain %67 %65 %20 %66
         %69 = OpLoad %6 %68
         %70 = OpIEqual %30 %60 %69
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %88
         %71 = OpLabel
         %75 = OpAccessChain %67 %65 %20 %9
         %76 = OpLoad %6 %75
         %77 = OpConvertSToF %10 %76
         %78 = OpAccessChain %67 %65 %20 %20
         %79 = OpLoad %6 %78
         %80 = OpConvertSToF %10 %79
         %81 = OpAccessChain %67 %65 %20 %20
         %82 = OpLoad %6 %81
         %83 = OpConvertSToF %10 %82
         %84 = OpAccessChain %67 %65 %20 %9
         %85 = OpLoad %6 %84
         %86 = OpConvertSToF %10 %85
         %87 = OpCompositeConstruct %11 %77 %80 %83 %86
               OpStore %74 %87
               OpBranch %72
         %88 = OpLabel
         %89 = OpAccessChain %67 %65 %20 %20
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %10 %90
         %92 = OpCompositeConstruct %11 %91 %91 %91 %91
               OpStore %74 %92
               OpBranch %72
         %72 = OpLabel
               OpReturn
               OpFunctionEnd
