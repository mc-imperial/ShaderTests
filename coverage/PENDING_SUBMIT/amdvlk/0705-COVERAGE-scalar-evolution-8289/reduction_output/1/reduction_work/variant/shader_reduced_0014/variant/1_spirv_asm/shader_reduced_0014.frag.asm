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
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "buf_push"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %28 "buf1"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %39 "a"
               OpName %43 "i"
               OpName %74 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 1
               OpDecorate %74 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeStruct %15
         %21 = OpTypePointer PushConstant %20
         %22 = OpVariable %21 PushConstant
         %23 = OpTypePointer PushConstant %15
         %26 = OpConstant %9 3
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 1
         %50 = OpConstant %15 2
         %72 = OpTypeVector %6 4
         %73 = OpTypePointer Output %72
         %74 = OpVariable %73 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %43 = OpVariable %38 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %23 %22 %16
         %25 = OpLoad %15 %24
         %32 = OpAccessChain %31 %30 %16 %16
         %33 = OpLoad %15 %32
         %35 = OpSGreaterThan %34 %25 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
         %41 = OpAccessChain %31 %30 %16 %40
         %42 = OpLoad %15 %41
               OpStore %39 %42
               OpStore %43 %16
               OpBranch %44
         %44 = OpLabel
               OpLoopMerge %46 %47 None
               OpBranch %48
         %48 = OpLabel
         %49 = OpLoad %15 %43
         %51 = OpAccessChain %31 %30 %16 %50
         %52 = OpLoad %15 %51
         %53 = OpSLessThan %34 %49 %52
               OpBranchConditional %53 %45 %46
         %45 = OpLabel
         %54 = OpAccessChain %23 %22 %16
         %55 = OpLoad %15 %54
         %56 = OpLoad %15 %39
         %57 = OpIMul %15 %56 %55
               OpStore %39 %57
               OpBranch %47
         %47 = OpLabel
         %58 = OpLoad %15 %43
         %59 = OpIAdd %15 %58 %40
               OpStore %43 %59
               OpBranch %44
         %46 = OpLabel
         %60 = OpLoad %15 %39
         %61 = OpConvertSToF %6 %60
               OpStore %8 %61
               OpBranch %37
         %37 = OpLabel
         %62 = OpLoad %6 %8
         %63 = OpAccessChain %17 %14 %16 %16
         %64 = OpLoad %6 %63
         %65 = OpExtInst %6 %1 FMax %62 %64
               OpStore %8 %65
         %66 = OpLoad %6 %8
         %67 = OpAccessChain %17 %14 %16 %16
         %68 = OpLoad %6 %67
         %69 = OpFOrdEqual %34 %66 %68
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %88
         %70 = OpLabel
         %75 = OpAccessChain %31 %30 %16 %40
         %76 = OpLoad %15 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpAccessChain %31 %30 %16 %16
         %79 = OpLoad %15 %78
         %80 = OpConvertSToF %6 %79
         %81 = OpAccessChain %31 %30 %16 %16
         %82 = OpLoad %15 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpAccessChain %31 %30 %16 %40
         %85 = OpLoad %15 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpCompositeConstruct %72 %77 %80 %83 %86
               OpStore %74 %87
               OpBranch %71
         %88 = OpLabel
         %89 = OpAccessChain %31 %30 %16 %16
         %90 = OpLoad %15 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpCompositeConstruct %72 %91 %91 %91 %91
               OpStore %74 %92
               OpBranch %71
         %71 = OpLabel
               OpReturn
               OpFunctionEnd
