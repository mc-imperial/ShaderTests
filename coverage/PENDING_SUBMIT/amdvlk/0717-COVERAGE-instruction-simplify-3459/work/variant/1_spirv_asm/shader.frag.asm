; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 70
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %46
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %24 "buf2"
               OpMemberName %24 0 "three"
               OpName %26 ""
               OpName %46 "_GLF_color"
               OpName %49 "buf0"
               OpMemberName %49 0 "_GLF_uniform_int_values"
               OpName %51 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 2
               OpDecorate %34 RelaxedPrecision
               OpDecorate %46 Location 0
               OpDecorate %48 ArrayStride 16
               OpMemberDecorate %49 0 Offset 0
               OpDecorate %49 Block
               OpDecorate %51 DescriptorSet 0
               OpDecorate %51 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpConstant %15 1
         %18 = OpTypePointer Uniform %6
         %21 = OpConstant %15 2
         %24 = OpTypeStruct %15
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpTypePointer Uniform %15
         %40 = OpTypeBool
         %44 = OpTypeVector %6 4
         %45 = OpTypePointer Output %44
         %46 = OpVariable %45 Output
         %47 = OpConstant %9 2
         %48 = OpTypeArray %15 %47
         %49 = OpTypeStruct %48
         %50 = OpTypePointer Uniform %49
         %51 = OpVariable %50 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
         %22 = OpAccessChain %18 %14 %16 %21
         %23 = OpLoad %6 %22
         %28 = OpAccessChain %27 %26 %16
         %29 = OpLoad %15 %28
         %30 = OpBitCount %15 %29
         %31 = OpAccessChain %27 %26 %16
         %32 = OpLoad %15 %31
         %33 = OpBitCount %15 %32
         %34 = OpExtInst %15 %1 SMin %30 %33
         %35 = OpConvertSToF %6 %34
         %36 = OpExtInst %6 %1 FClamp %20 %23 %35
               OpStore %8 %36
         %37 = OpLoad %6 %8
         %38 = OpAccessChain %18 %14 %16 %16
         %39 = OpLoad %6 %38
         %41 = OpFOrdEqual %40 %37 %39
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %65
         %42 = OpLabel
         %52 = OpAccessChain %27 %51 %16 %16
         %53 = OpLoad %15 %52
         %54 = OpConvertSToF %6 %53
         %55 = OpAccessChain %27 %51 %16 %17
         %56 = OpLoad %15 %55
         %57 = OpConvertSToF %6 %56
         %58 = OpAccessChain %27 %51 %16 %17
         %59 = OpLoad %15 %58
         %60 = OpConvertSToF %6 %59
         %61 = OpAccessChain %27 %51 %16 %16
         %62 = OpLoad %15 %61
         %63 = OpConvertSToF %6 %62
         %64 = OpCompositeConstruct %44 %54 %57 %60 %63
               OpStore %46 %64
               OpBranch %43
         %65 = OpLabel
         %66 = OpAccessChain %27 %51 %16 %17
         %67 = OpLoad %15 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpCompositeConstruct %44 %68 %68 %68 %68
               OpStore %46 %69
               OpBranch %43
         %43 = OpLabel
               OpReturn
               OpFunctionEnd
