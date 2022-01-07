; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 85
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %70
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
               OpName %41 "i"
               OpName %70 "_GLF_color"
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
               OpDecorate %70 Location 0
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
         %26 = OpConstant %9 2
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 1
         %48 = OpConstant %15 120
         %68 = OpTypeVector %6 4
         %69 = OpTypePointer Output %68
         %70 = OpVariable %69 Output
         %71 = OpConstant %6 1
         %83 = OpConstant %6 0
         %84 = OpConstantComposite %68 %83 %83 %83 %83
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %41 = OpVariable %38 Function
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
               OpStore %39 %40
               OpStore %41 %16
               OpBranch %42
         %42 = OpLabel
               OpLoopMerge %44 %45 None
               OpBranch %46
         %46 = OpLabel
         %47 = OpLoad %15 %41
         %49 = OpSLessThan %34 %47 %48
               OpBranchConditional %49 %43 %44
         %43 = OpLabel
         %50 = OpAccessChain %23 %22 %16
         %51 = OpLoad %15 %50
         %52 = OpLoad %15 %39
         %53 = OpIMul %15 %52 %51
               OpStore %39 %53
               OpBranch %45
         %45 = OpLabel
         %54 = OpLoad %15 %41
         %55 = OpIAdd %15 %54 %40
               OpStore %41 %55
               OpBranch %42
         %44 = OpLabel
         %56 = OpLoad %15 %39
         %57 = OpConvertSToF %6 %56
               OpStore %8 %57
               OpBranch %37
         %37 = OpLabel
         %58 = OpLoad %6 %8
         %59 = OpAccessChain %17 %14 %16 %16
         %60 = OpLoad %6 %59
         %61 = OpExtInst %6 %1 FMax %58 %60
               OpStore %8 %61
         %62 = OpLoad %6 %8
         %63 = OpAccessChain %17 %14 %16 %16
         %64 = OpLoad %6 %63
         %65 = OpFOrdEqual %34 %62 %64
               OpSelectionMerge %67 None
               OpBranchConditional %65 %66 %82
         %66 = OpLabel
         %72 = OpAccessChain %31 %30 %16 %16
         %73 = OpLoad %15 %72
         %74 = OpConvertSToF %6 %73
         %75 = OpAccessChain %31 %30 %16 %16
         %76 = OpLoad %15 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpAccessChain %31 %30 %16 %40
         %79 = OpLoad %15 %78
         %80 = OpConvertSToF %6 %79
         %81 = OpCompositeConstruct %68 %71 %74 %77 %80
               OpStore %70 %81
               OpBranch %67
         %82 = OpLabel
               OpStore %70 %84
               OpBranch %67
         %67 = OpLabel
               OpReturn
               OpFunctionEnd
