; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 109
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %58 %90
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %30 "j"
               OpName %38 "b"
               OpName %58 "gl_FragCoord"
               OpName %65 "buf1"
               OpMemberName %65 0 "_GLF_uniform_float_values"
               OpName %67 ""
               OpName %90 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %58 BuiltIn FragCoord
               OpDecorate %64 ArrayStride 16
               OpMemberDecorate %65 0 Offset 0
               OpDecorate %65 Block
               OpDecorate %67 DescriptorSet 0
               OpDecorate %67 Binding 1
               OpDecorate %90 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %27 = OpConstant %6 10
         %28 = OpTypeBool
         %55 = OpTypeFloat 32
         %56 = OpTypeVector %55 4
         %57 = OpTypePointer Input %56
         %58 = OpVariable %57 Input
         %59 = OpConstant %9 0
         %60 = OpTypePointer Input %55
         %63 = OpConstant %9 1
         %64 = OpTypeArray %55 %63
         %65 = OpTypeStruct %64
         %66 = OpTypePointer Uniform %65
         %67 = OpVariable %66 Uniform
         %68 = OpTypePointer Uniform %55
         %80 = OpConstant %6 2
         %89 = OpTypePointer Output %56
         %90 = OpVariable %89 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %30 = OpVariable %7 Function
         %38 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpStore %20 %16
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %20
         %29 = OpSLessThanEqual %28 %26 %27
               OpBranchConditional %29 %22 %23
         %22 = OpLabel
               OpStore %30 %15
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %6 %30
         %37 = OpSLessThan %28 %36 %27
               OpBranchConditional %37 %32 %33
         %32 = OpLabel
         %39 = OpLoad %6 %30
         %40 = OpLoad %6 %20
         %41 = OpIAdd %6 %39 %40
         %42 = OpISub %6 %41 %16
               OpStore %38 %42
         %43 = OpLoad %6 %30
               OpStore %8 %43
               OpBranch %44
         %44 = OpLabel
               OpLoopMerge %46 %47 None
               OpBranch %48
         %48 = OpLabel
         %49 = OpLoad %6 %8
         %50 = OpLoad %6 %38
         %51 = OpSLessThanEqual %28 %49 %50
         %52 = OpLoad %6 %38
         %53 = OpSLessThanEqual %28 %52 %16
         %54 = OpLogicalAnd %28 %51 %53
               OpBranchConditional %54 %45 %46
         %45 = OpLabel
         %61 = OpAccessChain %60 %58 %59
         %62 = OpLoad %55 %61
         %69 = OpAccessChain %68 %67 %15 %15
         %70 = OpLoad %55 %69
         %71 = OpFOrdLessThan %28 %62 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
               OpKill
         %73 = OpLabel
         %75 = OpLoad %6 %8
         %76 = OpIAdd %6 %75 %16
               OpStore %8 %76
               OpBranch %47
         %47 = OpLabel
               OpBranch %44
         %46 = OpLabel
               OpBranch %34
         %34 = OpLabel
         %77 = OpLoad %6 %20
         %78 = OpLoad %6 %30
         %79 = OpIAdd %6 %78 %77
               OpStore %30 %79
               OpBranch %31
         %33 = OpLabel
               OpBranch %24
         %24 = OpLabel
         %81 = OpLoad %6 %20
         %82 = OpIMul %6 %81 %80
               OpStore %20 %82
               OpBranch %21
         %23 = OpLabel
         %83 = OpLoad %6 %8
         %84 = OpAccessChain %17 %14 %15 %80
         %85 = OpLoad %6 %84
         %86 = OpIEqual %28 %83 %85
               OpSelectionMerge %88 None
               OpBranchConditional %86 %87 %104
         %87 = OpLabel
         %91 = OpAccessChain %17 %14 %15 %15
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %55 %92
         %94 = OpAccessChain %17 %14 %15 %16
         %95 = OpLoad %6 %94
         %96 = OpConvertSToF %55 %95
         %97 = OpAccessChain %17 %14 %15 %16
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %55 %98
        %100 = OpAccessChain %17 %14 %15 %15
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %55 %101
        %103 = OpCompositeConstruct %56 %93 %96 %99 %102
               OpStore %90 %103
               OpBranch %88
        %104 = OpLabel
        %105 = OpAccessChain %17 %14 %15 %16
        %106 = OpLoad %6 %105
        %107 = OpConvertSToF %55 %106
        %108 = OpCompositeConstruct %56 %107 %107 %107 %107
               OpStore %90 %108
               OpBranch %88
         %88 = OpLabel
               OpReturn
               OpFunctionEnd
