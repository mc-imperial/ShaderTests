; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 112
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %110
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "func("
               OpName %13 "_GLF_global_loop_count"
               OpName %25 "buf1"
               OpMemberName %25 0 "_GLF_uniform_int_values"
               OpName %27 ""
               OpName %76 "buf0"
               OpMemberName %76 0 "_GLF_uniform_float_values"
               OpName %78 ""
               OpName %110 "_GLF_color"
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 1
               OpDecorate %75 ArrayStride 16
               OpMemberDecorate %76 0 Offset 0
               OpDecorate %76 Block
               OpDecorate %78 DescriptorSet 0
               OpDecorate %78 Binding 0
               OpDecorate %110 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypeFunction %7
         %11 = OpTypeInt 32 1
         %12 = OpTypePointer Private %11
         %13 = OpVariable %12 Private
         %14 = OpConstant %11 0
         %20 = OpConstant %11 1
         %22 = OpTypeInt 32 0
         %23 = OpConstant %22 2
         %24 = OpTypeArray %11 %23
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpTypePointer Uniform %11
         %62 = OpConstant %6 1
         %66 = OpConstant %6 0
         %67 = OpTypeMatrix %7 4
         %74 = OpConstant %22 1
         %75 = OpTypeArray %6 %74
         %76 = OpTypeStruct %75
         %77 = OpTypePointer Uniform %76
         %78 = OpVariable %77 Uniform
         %79 = OpTypePointer Uniform %6
         %82 = OpTypeBool
        %101 = OpConstant %11 10
        %109 = OpTypePointer Output %7
        %110 = OpVariable %109 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %13 %14
        %111 = OpFunctionCall %7 %9
               OpStore %110 %111
               OpReturn
               OpFunctionEnd
          %9 = OpFunction %7 None %8
         %10 = OpLabel
               OpBranch %15
         %15 = OpLabel
               OpLoopMerge %17 %18 None
               OpBranch %16
         %16 = OpLabel
         %19 = OpLoad %11 %13
         %21 = OpIAdd %11 %19 %20
               OpStore %13 %21
         %29 = OpAccessChain %28 %27 %14 %14
         %30 = OpLoad %11 %29
         %31 = OpConvertSToF %6 %30
         %32 = OpAccessChain %28 %27 %14 %14
         %33 = OpLoad %11 %32
         %34 = OpConvertSToF %6 %33
         %35 = OpAccessChain %28 %27 %14 %14
         %36 = OpLoad %11 %35
         %37 = OpConvertSToF %6 %36
         %38 = OpAccessChain %28 %27 %14 %14
         %39 = OpLoad %11 %38
         %40 = OpConvertSToF %6 %39
         %41 = OpAccessChain %28 %27 %14 %14
         %42 = OpLoad %11 %41
         %43 = OpConvertSToF %6 %42
         %44 = OpAccessChain %28 %27 %14 %14
         %45 = OpLoad %11 %44
         %46 = OpConvertSToF %6 %45
         %47 = OpAccessChain %28 %27 %14 %14
         %48 = OpLoad %11 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpAccessChain %28 %27 %14 %14
         %51 = OpLoad %11 %50
         %52 = OpConvertSToF %6 %51
         %53 = OpAccessChain %28 %27 %14 %14
         %54 = OpLoad %11 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpAccessChain %28 %27 %14 %14
         %57 = OpLoad %11 %56
         %58 = OpConvertSToF %6 %57
         %59 = OpAccessChain %28 %27 %14 %14
         %60 = OpLoad %11 %59
         %61 = OpConvertSToF %6 %60
         %63 = OpAccessChain %28 %27 %14 %20
         %64 = OpLoad %11 %63
         %65 = OpConvertSToF %6 %64
         %68 = OpCompositeConstruct %7 %31 %34 %37 %40
         %69 = OpCompositeConstruct %7 %43 %46 %49 %52
         %70 = OpCompositeConstruct %7 %55 %58 %61 %62
         %71 = OpCompositeConstruct %7 %62 %65 %66 %66
         %72 = OpCompositeConstruct %67 %68 %69 %70 %71
         %73 = OpExtInst %6 %1 Determinant %72
         %80 = OpAccessChain %79 %78 %14 %14
         %81 = OpLoad %6 %80
         %83 = OpFOrdEqual %82 %73 %81
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %85
         %84 = OpLabel
         %86 = OpAccessChain %28 %27 %14 %14
         %87 = OpLoad %11 %86
         %88 = OpConvertSToF %6 %87
         %89 = OpAccessChain %28 %27 %14 %20
         %90 = OpLoad %11 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpAccessChain %28 %27 %14 %20
         %93 = OpLoad %11 %92
         %94 = OpConvertSToF %6 %93
         %95 = OpAccessChain %28 %27 %14 %14
         %96 = OpLoad %11 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpCompositeConstruct %7 %88 %91 %94 %97
               OpReturnValue %98
         %85 = OpLabel
               OpBranch %18
         %18 = OpLabel
        %100 = OpLoad %11 %13
        %102 = OpSLessThan %82 %100 %101
               OpBranchConditional %102 %15 %17
         %17 = OpLabel
        %103 = OpAccessChain %28 %27 %14 %20
        %104 = OpLoad %11 %103
        %105 = OpConvertSToF %6 %104
        %106 = OpCompositeConstruct %7 %105 %105 %105 %105
               OpReturnValue %106
               OpFunctionEnd
